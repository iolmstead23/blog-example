import React from 'react';
import {useState} from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function login(ev) {
        ev.preventDefault();
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/JSON'}
        })
    }

    return (
        <>
            <h1 class="text-xl text-center">Login</h1>
            <form onSubmit={login}>
                <div class="relative mb-3 md:left-1/4" data-te-input-wrapper-init>
                    <label htmlFor="email" class="absolute left-3">Email Name</label><br/>
                    <input
                        class="shadow peer block w-full md:w-1/2 rounded bg-transparent px-3 py-[0.32rem] outline-none"
                        name="email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={username}
                        onChange={ev => setUsername(ev.target.value)}
                    />
                </div>
                <div class="relative mb-3 mt-3 md:left-1/4" data-te-input-wrapper-init>
                    <label htmlFor="password" class="absolute left-3">Password</label><br/>
                    <input
                        class="shadow peer block w-full md:w-1/2 rounded bg-transparent px-3 py-[0.32rem] outline-none"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                </div>
                <div class="relative mb-3 left-1/2">
                    <button class="rounded bg-gray-200 outline-2 hover:bg-gray-300 text-black font-bold py-2 px-4" type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Login;