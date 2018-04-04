<template>
    <Table border :columns="columns7" :data="listData"></Table>
</template>
<script>
export default {
  data() {
    return {
      columns7: [
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "标题",
          key: "age"
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
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
            ]);
          }
        }
      ],
      listData: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `公司名称：${this.listData[index].name}<br>标题：${
          this.listData[index].age
        }<br>地址：${this.listData[index].address}`
      });
    },
    remove(index) {
      this.$api
        .delete({ dbNmae: this.name, id: this.listData[index]._id })
        .then(res => {
          if (res.data.result === "OK") {
            this.listData.splice(index, 1);
            this.$Message.success("删除成功!");
          } else if (res.data.result === "ERR") {
            this.$Message.error("删除失败！");
          }
        });
    }
  }
};
</script>
