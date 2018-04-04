<template>
	<div class="login">
		 <Card style="width:300px;height:250px;">
        <p slot="title">
            <Icon type="log-in"></Icon>
            欢迎登录
        </p>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem style="display:flex;justify-content:center;">
            <Button type="primary" size="large" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
		 </Card>
	</div>
</template>
<script>
export default {
  props:["user","change"],
  created(){
     if(this.user){
        this.$router.push('/');
      }
  },
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          { required: true, message: "请输入您的用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入您的密码.", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码的长度最少6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$api
            .login(this.formInline)
            .then(res =>{
              if(res.data.result !== "OK"){
                this.$Message.error("登录失败");
              }else{
                this.change("user",this.formInline.user);
                this.$router.push("/");
              }
            })
            .catch(err => {
                this.$Message.error("登录失败");
            });
        } else {
          this.$Message.error("登录失败!");
        }
      });
    }
  }
};
</script>
<style scoped>
.login {
  display: flex;
  height: 100vh;
  justify-content: flex-end;
  padding-right: 150px;
  align-items: center;
  background-image: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
