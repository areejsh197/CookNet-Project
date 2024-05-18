const users = [
  {
    id: "login_form",
    title: "Welcome to Cooknet!",
    sections: [
      {
        id: "login_section",
        title: "Login Section",
        subsections: [
          {
            id: "login_subsection",
            title: "Login",
            subtitle: "Please enter your details.",
            users: [
              {
                id: "user_name",
                name: "Username",
                type: "text",
                placeholder: "Your username",
              },
              {
                id: "user_pass",
                name: "Password",
                type: "password",
                placeholder: "Your password",
              },
              {
                id: "remember_me",
                name: "Remember me",
                type: "checkbox",
                defaultValue: false,
              },
            ],
          },
        ],
      },
      { newusers: [{
        id: "signup_section",
        title: "Sign Up Section",
        subsections: [
          {
            id: "signup_subsection",
            title: "Sign Up",
            subtitle: "Create a new account."
          },
              {
                id: "signup_user_name",
                name: "Username",
                type: "text",
                placeholder: "Choose a username",
              },
              {
                id: "signup_user_email",
                name: "Email",
                type: "email",
                placeholder: "Your email",
              },
              {
                id: "signup_user_pass",
                name: "Password",
                type: "password",
                placeholder: "Choose a password",
              },
              {
                id: "signup_confirm_pass",
                name: "Confirm Password",
                type: "password",
                placeholder: "Confirm your password",
              },
            ],
          },
        ],
      },
    ],
    decorators: {
      user_pass: {
        component: {
          type: "password",
        },
      },
      signup_user_pass: {
        component: {
          type: "password",
        },
      },
      signup_confirm_pass: {
        component: {
          type: "password",
        },
      },
    },
  },
];

export default users;
