export const userRegistrationFormControls = [
    {
        name:'userName',
        label:'UserName',
        placeholder:'Please enter your user name',
        componentType:'input',
        type:'text'
    },
      {
        name:'email',
        label:'Email',
        placeholder:'Please enter your user email',
        componentType:'input',
        type:'email'
    },
      {
        name:'password',
        label:'Password',
        placeholder:'Please enter your user password',
        componentType:'input',
        type:'password'
    }
]

export const userloginformcontrol = [
     {
        name:'email',
        label:'Email',
        placeholder:'Please enter your user email',
        componentType:'input',
        type:'email'
    },
      {
        name:'password',
        label:'Password',
        placeholder:'Please enter your user password',
        componentType:'input',
        type:'password'
    }
]

export const  initialSignUpData:any = {
    userName: '',
    email:'',
    password:''
}

export const initialLoginFormData:any = {
     email:'',
    password:''
}
