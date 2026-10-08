import {useState} from 'react';

const Input = ({ children, type, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col mb-5">
      <label>{children}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
};

const Tombol = ({ onClick }) => {
    return (
        <button className="bg-blue-300 w-full py-1 rounded-md text-black cursor-pointer hover:bg-blue-500 hover:text-white"
        onClick={onClick}>
        Login</button>
    )
}

const Inputan = ({ email, setEmail, password, setPassword }) => {
  return (
    <div>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Masukkan email"
      >
        Email
      </Input>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Masukkan password"
      >
        Password
      </Input>
    </div>
  );
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const masuk = () => {
    if (email === '' || password === "") {
      alert('Email dan password harus diisi!');
    } else if (email === 'admin@gmail.com' && password === '123') {
      alert('Login berhasil!');
    } else {
      alert('Email atau password salah!');
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-200 p-5 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-10">Hello..</h1>
        <Inputan
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Tombol onClick={masuk} />
      </div>
    </div>
  );
}
