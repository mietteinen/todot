import { on } from 'events';
import React, { createRef, useEffect, useRef } from 'react';

interface EditableFieldProps {
    itemKey: number;
    initialText: string;
    onSave: (key: number, text: string) => void;
};

const EditableField: React.FC<EditableFieldProps> = ({ itemKey, initialText, onSave }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [value, setValue] = React.useState(initialText);
    const inputRef = createRef<HTMLInputElement>();

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        console.log('Changed ' + itemKey + ' to: ' + event.target.value);
    };

    const handleBlur = () => {
        console.log('Blur event fired!');
        setIsEditing(false);
        onSave(itemKey, value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') { handleBlur(); }
    };

    useEffect(() => {
        if (isEditing && inputRef.current !== null) {
            inputRef.current.focus();
        }
    }, [isEditing])

    return (
        <div onDoubleClick={handleDoubleClick}>
            {isEditing ? (
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                    ref={inputRef}
                />
            ) : (
                <span onClick={() => setIsEditing(true)}>{value}</span>
            )}
        </div>
    );
}

export default EditableField;