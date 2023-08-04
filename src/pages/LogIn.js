
import React, { useState } from 'react';


const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  
  const [idValid, setIdValid] = useState(false);

  const handleId = (e) => {
    setId(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };


  return(
    <setion>
    <div>
        <form>
            <div>
                <div>
                    <input
                     type='id'
                     id="id"
                     placeholder="아이디"
                     value={id}
                     onChange={handleId} 
                     required //아무것도 입력되지 않았을 때, 입력하라는 문구
                    />
                </div>
                <div>
                    {!idValid && id.length > 0 && (<div>올바른 이메일을 입력해주세요.</div>)}
                </div>
                <div>
                 <input
                    type='password'
                    id="password"
                    placeholder="비밀번호"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    required //아무것도 입력되지 않았을 때, 입력하라는 문구
                 />
                </div>
            </div>

            <div>
                <button>
                    로그인
                </button>
            </div>
            <p>
                <a
                 href='/SignUp'>
                 회원가입
                 </a>
            </p>
        </form>
    </div>
</setion>
)
}


export default Login;
