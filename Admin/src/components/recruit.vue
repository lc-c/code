<template>
  <div>
		<Table :data="listData" :columns="tableColumns" stripe></Table>
		<div style="margin: 10px;overflow: hidden">
			<div style="float: right;">
				<Page :total="100" :current="1" @on-change="changePage"></Page>
			</div>
		</div>
    	<Modal
        	v-model="modal"
        	title="编辑内容"
          :loading="true"
        	@on-ok="update"
        	@on-cancel="cancel">
			<Form ref="formInline" :model="OneData" :rules="ruleInline" :label-width="70">
				<FormItem prop="name" label="公司名称">
					<Input type="text" v-model="OneData.name" placeholder="公司名称"></Input>
				</FormItem>
				<FormItem label="招聘状态">
					<Select style="width:200px" v-model="OneData.status">
						<Option :value="1">招满</Option>
						<Option :value="2">进行中</Option>
					</Select>
				</FormItem>
				<br>
				<FormItem label="招聘时间">
					 <input-number :max="10" :min="1" :step="1" v-model="OneData.time"></input-number>
				</FormItem>
			</Form>
		</Modal>
  </div>
</template>
<script>
export default {
  created(){
    console.log(this.name);

  },
  data() {
    return {
      name:this.$route.name,
      ruleInline: {
        name: [
          {
            required: true,
            message: "请输入名字",
            trigger: "blur"
          }
        ]
      },
      modal: false,
      listData: this.mocklistData(),
      tableColumns: [
        {
          title: "公司名称",
          fixed: "left",
          align: "center",
          width: 150,
          key: "name"
        },
        {
          title: "招聘状态",
          key: "status",
          align: "center",
          render: (h, params) => {
            const row = params.row;
            const color = row.status === 1 ? "red" : "green";
            const text = row.status === 1 ? "招满" : "进行中";

            return h(
              "Tag",
              {
                props: {
                  type: "dot",
                  color: color
                }
              },
              text
            );
          }
        },
        {
          title: "招聘职位",
          key: "portrayal",
          align: "center",
          render: (h, params) => {
            return h(
              "Poptip",
              {
                props: {
                  trigger: "hover",
                  title: params.row.portrayal.length + "portrayals",
                  placement: "bottom"
                }
              },
              [
                h("Tag", params.row.portrayal.length),
                h(
                  "div",
                  {
                    slot: "content"
                  },
                  [
                    h(
                      "ul",
                      this.listData[params.index].portrayal.map(item => {
                        return h(
                          "li",
                          {
                            style: {
                              textAlign: "center",
                              padding: "4px"
                            }
                          },
                          item
                        );
                      })
                    )
                  ]
                )
              ]
            );
          }
        },
        {
          title: "已招聘人数",
          key: "people",
          align: "center",
          render: (h, params) => {
            return h(
              "Poptip",
              {
                props: {
                  trigger: "hover",
                  title: params.row.people.length + "customers",
                  placement: "bottom"
                }
              },
              [
                h("Tag", params.row.people.length),
                h(
                  "div",
                  {
                    slot: "content"
                  },
                  [
                    h(
                      "ul",
                      this.listData[params.index].people.map(item => {
                        return h(
                          "li",
                          {
                            style: {
                              textAlign: "center",
                              padding: "4px"
                            }
                          },
                          item.n + "：" + item.c + "People"
                        );
                      })
                    )
                  ]
                )
              ]
            );
          }
        },
        {
          title: "招聘时间（/天）",
          key: "time",
          align: "center",
          render: (h, params) => {
            return h("div", "Almost" + params.row.time + "days");
          }
        },
        {
          title: "更新时间",
          key: "update",
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              this.formatDate(this.listData[params.index].update)
            );
          }
        },
        {
          title: "操作",
          key: "action",
          fixed: "right",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }
              },
              [
                h(
                  "Button",
                  {
                    props: {
                      type: "primary",
                      size: "small"
                    },
                    style: {
                      // marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.show(params.index);
                      }
                    }
                  },
                  "查看"
                ),
                h(
                  "Button",
                  {
                    props: {
                      type: "info",
                      size: "small"
                    },
                    on: {
                      click: () => {
                        this.edit(params.index);
                      }
                    }
                  },
                  "编辑"
                ),
                h(
                  "Button",
                  {
                    props: {
                      type: "error",
                      size: "small"
                    },
                    on: {
                      click: () => {
                        this.remove(params.index);
                      }
                    }
                  },
                  "删除"
                )
              ]
            );
          }
        }
      ],
	  OneData: {},
	  index:0
    };
  },
  methods: {
    mocklistData() {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          name: "Business" + Math.floor(Math.random() * 100 + 1),
          status: Math.floor(Math.random() * 2 + 1),
          portrayal: ["City", "People", "Cost", "Life", "Entertainment"],
          people: [
            {
              n: "People" + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: "People" + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: "People" + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            }
          ],
          time: Math.floor(Math.random() * 7 + 1),
          update: new Date()
        });
      }
      return data;
    },
    formatDate(getDate) {
		var date = new Date(getDate);
		const y = date.getFullYear();
		let m = date.getMonth() + 1;
		m = m < 10 ? "0" + m : m;
		let d = date.getDate();
		d = d < 10 ? "0" + d : d;
		return y + "-" + m + "-" + d;
    },
    changePage() {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      this.listData = this.mocklistData();
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.listData[index].name}<br>status：${
          this.listData[index].status
        }<br>portrayal${this.listData[index].portrayal}`
      });
    },
    edit(index) {
	  this.OneData = JSON.parse(JSON.stringify(this.listData[index]));
	  this.index = index;
      this.modal = true;
    },
   remove(index) {
      this.$api.delete({dbNmae:this.name,id:this.listData[index]._id}).then((res)=>{
        if(res.data.result === "OK"){
          this.listData.splice(index, 1);
          this.$Message.success('删除成功!');
        }else if((res.data.result === "ERR")){
          this.$Message.error("删除失败！");
        }
      });
    },
    update() {
		if(this.handleSubmit()){
			var data = JSON.parse(JSON.stringify(this.OneData));
      this.$api.update({dbNmae:this.name,id:this.OneData._id,data:this.OneData}).then((res)=>{
        if(res.data.result === "OK"){
          this.listData.splice(this.index,1,data);
        }else if(res.data.result === "ERR"){
          	this.$Message.error("更新失败");
        }
      }).catch((err)=>{
        	this.$Message.error("更新失败");
      });
      console.log(JSON.stringify(data));
		}
	},
	cancel() {},
	handleSubmit() {
		this.$refs.formInline.validate((valid) => {
			if (valid) {
				this.$Message.success('Success!');
				return true;
			} else {
				this.$Message.error('Fail!');
				return false;
			}
		})
	}
  }
};
</script>
