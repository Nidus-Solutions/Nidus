import {
    Box,
    FormControl,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
} from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import InputComponent from '@/components/Input';
import axios from 'axios';

const Authentication = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const handlOnChange = useCallback((e: { persist: () => void; target: { id: any; value: any; }; }) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        });
    }, []);

    const handleServerResponse = useCallback((ok: any, msg: any) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg }
            });
            setInputs({
                email: "",
                password: ""
            });
        } else {
            setStatus({ 
                submitted: false,
                submitting: false,
                info: { error: true, msg }
            });
        }
    }, []);

    const handleOnSubmit = useCallback((e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

        const user = {
            username: "admin",
            email: inputs.email,
            password: inputs.password,
            urlImg: "nenhumainformacao",
            company: "Company",
        }
        
        console.log(user);

        axios({
            method: "POST",
            url: "http://localhost:3000/api/hello",
            data: user
        })
            .then(() => {
                handleServerResponse(true, "Login efetuado com sucesso");
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "/admin";
            })
            .catch((error) => {
                handleServerResponse(false, "Erro ao efetuar login");
                console.error(error);
            });
    }, []);

    return (
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Painel do Cliente</Heading>
            </Stack>
            <Box
                rounded={'lg'}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <FormControl
                        as='form'
                        onSubmit={handleOnSubmit} 
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        gap={4}

                    >
                        <InputComponent
                            id='email'
                            type='email'
                            value={inputs.email}
                            onChange={handlOnChange}
                            placeholder='Email'
                            required
                        />

                        <InputComponent
                            id='password'
                            type='password'
                            value={inputs.password}
                            onChange={handlOnChange}
                            placeholder='Senha'
                            required
                        />
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            w='100%'>
                            <Checkbox defaultChecked>Manter conectado</Checkbox>
                            <Text fontSize='sm' color="gray.800">
                                Esqueceu sua senha?
                            </Text>
                        </Box>

                        <Button
                            type='submit'
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Acessar
                        </Button>
                    </FormControl>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Authentication