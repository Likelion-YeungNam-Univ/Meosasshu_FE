import React from "react";
const LogIn = () => {
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
                        />
                    </div>
                    <div>
                    <input
                        type='password'
                        id="password"
                        placeholder="비밀번호"
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
export default LogIn

