<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                      Admin
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
							<Submenu name="2">
								<template slot="title">
									<Avatar :style="{background: color}" size="small">{{ user }}</Avatar>
								</template>
								<MenuGroup title="用户">
									<MenuItem name="2-1" @click.native="logout">退出</MenuItem>
								</MenuGroup>
                          	</Submenu>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            关于
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <!-- <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb> -->
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu active-name="1-2" theme="light" width="auto" @on-select="select">
                                    <MenuItem name="advertising">
                                        <Icon type="ios-navigate"></Icon>
                                        广告管理
                                    </MenuItem>
                                    <MenuItem name="recruit">
                                        <Icon type="ios-keypad"></Icon>
                                        招聘管理
                                    </MenuItem>
                                    <MenuItem name="apply">
                                        <Icon type="ios-analytics"></Icon>
                                        应聘管理
                                    </MenuItem>
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <keep-alive>
                              <transition>
                                <router-view></router-view>
                              </transition>
                            </keep-alive>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2017-2018 &copy; TalkingData</Footer>
        </Layout>
    </div>
</div>
</template>
<script>
export default {
  props:["user","change"],
  created(){
    this.goLogin();
  },
   $route(){
      this.goLogin();
  },
  data() {
    return {
      color: "#00a2ae"

    };
  },
  methods: {
    select(name) {
      console.log(name);
      this.$router.push("/" + name);
    },
    goLogin(){
      if(this.user===''){
        this.$router.push("/login");
      }
    },
    logout(){
      this.change("user","");
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  min-height: 100vh;
  overflow: hidden;
}

.layout-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  color: #d7dde4;
  font-weight: bold;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
