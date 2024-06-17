<template>
  <div id="body">
      <div class="wrapper">
        <form action="">
          <h1>Войти</h1>
          <div class="input-box">
            <input v-model="authInput.txtEmail" type="text" placeholder="Имя пользователя" required>
            <i class='bx bx-user'></i>
          </div>
          <div class="input-box">
            <input v-model="authInput.txtPassword" type="password" placeholder="Введите пароль" required>
            <i class='bx bxs-lock-alt'></i>
          </div>
            <button @click="login()" class="btn">Войти</button>
          
        </form>
      </div>
  </div>
</template>

<script>
import {store} from '../store/index.js'
export default {
  name: 'login',
  data() {
    return {
      authInput: {
        txtEmail: '',
        txtPassword: ''
      }
    }
  },
  computed:{
    user(){
      return store.state.user
    }
  },
  methods: {
    async login(){
      try {
        await store.dispatch('login', { email:this.authInput.txtEmail, password:this.authInput.txtPassword })
        if (this.user!=null){
          await this.$router.push('/') 
		  this.$message({
			type: 'success',
			message: 'Вход выполнен!'
		  });
        }
      }catch(error){
        this.$message({
          message: 'Неверный логин или пароль!',
          type: 'warning'
        });
      }
    },
  }
}
</script>
<style >
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Poppins", sans-serif;
}

#body {
	z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	
}

.wrapper {
  width: 420px;
	background: transparent;
	border: 2px solid rgba(255, 255, 255, .2);
	backdrop-filter: blur(20px);
	box-shadow: 5px 5px 20px gray;
	color: #fff;
	border-radius: 10px;
	padding: 30px 40px;
    color: #749cf0;
}

.wrapper h1 {
	font-size: 36px;
	text-align: center;
}

.wrapper .input-box {
	position: relative;
	width: 100%;
	height: 50px;	
	margin: 30px 0;
}

.input-box input {
	width: 100%;
	height: 100%;
	background: transparent;
	border: none;
	outline: none;
	border: 2px solid #96b7ff;
	border-radius: 10px;
	font-size: 16px;
	color: #212121;
	padding: 20px 45px 20px 20px;	
}

.input-box input::placeholder {
	color: #96b7ff;
}

.input-box i {
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 20px;
}



.wrapper .btn {
	width: 100%;
	height: 45px;
	background: #fff;
	border: 1px solid #749cf0;
	border-radius: 10px;
	box-shadow: 0 0 10px #96b7ff;
	cursor: pointer;
	font-size: 16px;
	color: #96b7ff;
	font-weight: 600;
	transition: 0.5s;

}
.wrapper .btn:hover {
	width: 100%;
	height: 45px;
	background: #d2dcf3;
	border: 1px solid #749cf0;
	border-radius: 12px;
	box-shadow: 0 0 10px #96b7ff;
	cursor: pointer;
	font-size: 16px;
	color: #44a2ff;
	font-weight: 600;
	transition: 0.5s;
}

.wrapper .register-link {
	font-size: 14.5px;
	text-align: center;
	margin: 20px 0 15px;
}

.register-link p a {
	color: #44a2ff;
	text-decoration: none;
	font-weight: 600;
}

.register-link p a:hover{
	text-decoration: underline;
}
</style>
