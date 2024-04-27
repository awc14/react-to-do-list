'use client'
import {useFormState} from 'react-dom'

import {toast} from 'sonner'

import {cn} from '@/lib/utils/mergeCss'
import { deleteAction } from '@/actions/deleteTaskAction'
import {FormControl, Input, Label} from '.'

const initialState = {
	message: 'default',
}


function DeleteTaskForm({ children, className, uid, payload }) {
    const [state, formAction] = useFormState(deleteAction, initialState);

    // Check if payload is an array and has at least two elements
    let task = '';
    let category = '';
    if (Array.isArray(payload) && payload.length === 2) {
        [task, category] = payload;
    } else {
        // Handle the case where payload is not an array or doesn't have two elements
        // You can log a warning or set default values for task and category
        console.warn('Payload is not in the expected format:', payload);
    }

    if (state.message === 'success') {
        toast(
            <aside className="bg-green-500 text-lime-50 rounded-lg py-6 text-center">
                <p>Your toast message was saved successfully</p>
            </aside>
        );
    }

    return (
        <section>
            <header>
                <h2 className="text-xs font-light">
                    Form State: <span className="font-bold text-green-500">{state.message}</span>
                </h2>
            </header>
            <form action={formAction} className={cn('space-y-5 bg-white py-8 px-4', className)}>
                <FormControl>
                    <Input hidden name="uid" value={uid} />
                </FormControl>

                <FormControl className="flex flex-col">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" name="category" defaultValue={category} />
                </FormControl>

                <FormControl className="flex flex-col">
                    <Label htmlFor="task">Task</Label>
                    <Input id="task" name="task" defaultValue={task} />
                </FormControl>
                <FormControl className="pt-3">
                    <button className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">
                        Delete Task
                    </button>
                </FormControl>
            </form>
        </section>
    );
}

export {DeleteTaskForm}
