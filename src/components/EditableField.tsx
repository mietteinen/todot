import React, { createRef, useEffect } from 'react';

interface EditableFieldProps {
    itemKey: number;
    initialText: string;
    onSave: (key: number, text: string) => void;
};

const EditableField: React.FC<EditableFieldProps> = ({ itemKey, initialText, onSave }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [value, setValue] = React.useState(initialText);
    const inputRef = createRef<HTMLInputElement>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
        onSave(itemKey, value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === 'Escape') { handleBlur(); }
    };

    useEffect(() => {
        if (isEditing && inputRef.current !== null) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing, inputRef])

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyUp={handleKeyPress}
                    ref={inputRef}
                />
            ) : (
                <span onClick={() => setIsEditing(true)}>{value}</span>
            )}
        </div>
    );
}

export default EditableField;