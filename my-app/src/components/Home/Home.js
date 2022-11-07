
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    const [work, setWork] = useState("")
    const [todos, setTodos] = useState([])

    const handleWork = () => {
        if (todos?.some((item) => item.id === work?.replace(/\s/g, ''))) {
            toast.warn("exits work")
        } else {
            setTodos(prev => [...prev, { id: work?.replace(/\s/g, ''), job: work }])
            setWork("")
            toast.success("add work")
        }

    }

    const handleDelete = (id) => {
        setTodos(prev => prev.filter(item => item.id !== id))
        toast.success("Deleted")
    }

    return (

        <>
            <div className="flex flex-col gap-8 items-center">

                <div className="flex gap-8">
                    <input type="text"
                        className="outline-none border border-blue-500 px-4 py-2 w-[400px] h-10"
                        value={work}
                        onChange={(e) => setWork(e.target.value)} />

                    <button type="button"
                        className="ounline-none px-4 py-2 bg-blue-700 text-white" onClick={handleWork}>
                        Submit Work
                    </button>
                </div>

                <div>
                    <h3>Content</h3>
                    <ul>
                        {
                            todos?.map((item) => {
                                return (
                                    <li key={item.id} className="flex gap-10 items-center">
                                        <span className="mg-2 cursor-pointer">{item.job}</span>
                                        <span className="mg-2 cursor-pointer" onClick={() => handleDelete(item.id)}>x</span>
                                    </li>


                                )
                            })
                        }
                    </ul>
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </>

    )
}

// const Home = (props) => {
//     return (
//         <div>
//             Main content home
//         </div>

//     )
// }

// export default Home

