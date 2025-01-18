export const registerFormControls = [
  {
    "name": "firstName",
    "label": "First name",
    "value": "",
    "type": "text",
    "validators": [

      {
        "validatorName": "email",
        "email": "email",
        "message": "it should be email"
      },
      {
        "validatorName": "required",
        "required": true,
        "message": "First Name is Required"
      },
    ]
  },
  {
    "name": "lastName",
    "label": "Last name",
    "value": "",
    "type": "text",
    "validators": [
      {
        "validatorName": "required",
        "required": true,
        "message": "Last Name is Required"
      },
      {
        "validatorName": "minLength",
        "minLength": 15,
        "message": "Minimum char should be 15"
      }
    ]
  },
  {
    "name": "password",
    "label": "Password",
    "value": "",
    "type": "password",
    "validators": [
      {
        "validatorName": "required",
        "required": true,
        "message": "Password is Required"
      },
      {
        "validatorName": "minLength",
        "minLength": 15,
        "message": "Minimum char should be 15"
      }
    ]
  },
]
