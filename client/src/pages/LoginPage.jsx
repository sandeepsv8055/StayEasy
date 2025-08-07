export default function LoginPage(){
    return (
        <div className="mt-4">
            <form>
                <input type="email" placeholder="your@email.com"/>
                <input type="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    );
}