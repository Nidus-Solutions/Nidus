import { Input } from "@chakra-ui/react";

interface InputsProps {
    id: string;
    type: string;
    value: string;
    onChange: (e: { persist: () => void; target: { id: any; value: any; }; }) => void;
    placeholder: string;
    required: boolean;
}


const InputComponent = ({id, onChange, type, required, value, placeholder }: InputsProps) => {
    return (
        <Input
            borderWidth={2}
            borderColor="#2C3E50"
            borderRadius={10}
            px={8}
            py={2}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            _hover={
                {
                    borderColor: "#3498DB"
                }
            }
            placeholder={placeholder}
            _placeholder={{ color: "#2C3E50", fontSize: "lg" }}
            required={required}
        />
    )
};

export default InputComponent;