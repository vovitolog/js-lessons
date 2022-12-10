import React, {ChangeEvent, MouseEvent} from "react";

// const callback = () => {
//     alert('Hey');
// }
//
// window.setTimeout(callback, 1000);

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
    }
    const saveUser = () => {
        alert('User deleted')
    }
    const onNameChanged = () => {
        alert('Change!!!')
    }

    const onAgeChanged = (event : ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
    }
    const onFocusLost = () => {
        alert('onFocusLost!!!')
    }
    return (
        <div>
            <div>
                <textarea
                    onChange={onNameChanged}
                    onBlur={onFocusLost}>

                </textarea>

            </div>
            <div>
                 <input onChange={onAgeChanged}/>
            </div>
            <button name='delete' onClick={deleteUser}>delete</button>
            <button name='save' onClick={deleteUser}>save</button>
        </div>
    )
}