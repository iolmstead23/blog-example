import React from 'react';
import {useState} from 'react';

const Register = () => {

    const [username, setUsername] = useState('');

    async function register(ev) {
        ev.preventDefault();
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/JSON'}
        })
    }

    return (
        <>
            <h1 class="text-xl text-center">Register</h1>
            <form onSubmit={register}>
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
                <div class="relative mb-3 mt-3 md:left-1/4" data-te-input-wrapper-init>
                    <label htmlFor="password1" class="absolute left-3">Password</label><br/>
                    <input
                        class="shadow peer block w-full md:w-1/2 rounded bg-transparent px-3 py-[0.32rem] outline-none"
                        name="password1"
                        type="password1"
                        required
                        placeholder="Password"
                    />
                </div>
                <div class="relative mb-3 left-1/2">
                    <button class="rounded bg-gray-200 outline-2 hover:bg-gray-300 text-black font-bold py-2 px-4" type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Register;