import * as yup from "yup";

export const SignUpSchema = yup
  .object({
    email: yup
      .string()
      .email("이메일 형식이 올바르지 않습니다")
      .required("이메일을 입력해주세요"),
    displayName: yup.string().required("닉네임을 입력해주세요"),
    password: yup
      .string()
      .required("비밀번호를 입력해주세요")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,20}$/,
        {
          message:
            "영문, 숫자, 특수문자를 조합한 10자리 이상 20자리 이하 비밀번호를 입력해 주세요. ",
        }
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
    phoneNumber: yup
      .string()
      .required("휴대폰번호를 입력해주세요")
      .matches(/^(?:(010\d{4})|(070\d{4})|(01[1|6|7|8|9]\d{3,4}))(\d{4})$/, {
        message: "휴대폰번호 형식이 올바르지 않습니다.",
      }),
  })
  .required();
