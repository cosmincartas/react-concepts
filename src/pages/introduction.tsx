import { ListItems } from '@/components/QuickStart';
import { useState } from 'react';

export default function Introduction() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [done, setDone] = useState(0);
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Finish BE' },
        { id: 2, name: 'Finish FE' },
        { id: 3, name: 'Finish DB' },
    ]);

    function handleTaskDone(id: number) {
        setTasks(tasks.filter((task) => task.id !== id));
        setDone(done + 1);
    }

    function toggleLoginState() {
        setIsLoggedIn((current) => !current);
    }
    return (
        <div className="flex flex-col gap-4">
            <h1>Total finished tasks: {done}</h1>
            <div className="flex gap-2">
                <ListItems items={tasks} title="Backlog" onTaskDone={handleTaskDone} />
                <ListItems items={tasks} title="In Progress" onTaskDone={handleTaskDone} />
            </div>
            <div className="flex self-center">
                {isLoggedIn && (
                    <button className="p-2 bg-slate-500 rounded" onClick={toggleLoginState}>
                        Logout
                    </button>
                )}
                {!isLoggedIn && (
                    <button className="p-2 bg-slate-500 rounded" onClick={toggleLoginState}>
                        Login
                    </button>
                )}
            </div>
        </div>
    );
}
