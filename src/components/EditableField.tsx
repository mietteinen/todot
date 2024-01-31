import React, { createRef, useEffect, useRef } from 'react';

interface EditableFieldProps {
    initialText: string;
};

const EditableField: React.FC<EditableFieldProps> = ({ initialText }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [value, setValue] = React.useState(initialText);
    const inputRef = createRef<HTMLInputElement>();

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
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
                    ref={inputRef}
                />
            ) : (
                <span onClick={() => setIsEditing(true)}>{value}</span>
            )}
        </div>
    );
}

export default EditableField;