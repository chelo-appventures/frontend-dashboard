import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select, { components } from 'react-select'; // Asegúrate de importar react-select correctamente

interface Country {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    flags?: {
        png: string;
    };
}

const CountryPhoneSelect: React.FC<{ selectLabel?: string; errorField?: string }> = ({ selectLabel, errorField }) => {
    const [options, setOptions] = useState<{ value: string; label: JSX.Element }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const countries: Country[] = response.data;

                const options = countries
                    .filter(country => country.idd?.root && country.idd?.suffixes && country.idd.suffixes.length > 0)
                    .map(country => {
                        const spanishName = country.name.nativeName?.spa?.common || country.name.common;
                        const phoneCode = country.idd.root + country.idd.suffixes[0];
                        const flagUrl = country.flags?.png || '';

                        return {
                            value: phoneCode,
                            label: (
                                <div className='flex items-center font-normal'>
                                    {flagUrl && <img src={flagUrl} alt={`${spanishName} Flag`} className='w-5 mr-2' />}
                                    {phoneCode}
                                </div>
                            ),
                        };
                    });

                setOptions(options);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los datos de los países:', error);
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    // Estilos personalizados para mostrar imágenes de banderas
    const customStyles = {
        option: (provided: any, state: any) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            padding: '5px 10px',
        }),
        singleValue: (provided: any) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
        }),
        // Opcional: Estilos para el contenedor del selector
        control: (provided: any) => ({
            ...provided,
            width: '100%',
            borderColor: 'border-orange-500'
        }),
    };


    // const customStyles = {
    //     control: (provided: any, state: any) => ({
    //         ...provided,
    //         // Aquí puedes añadir tus clases de TailwindCSS
    //         backgroundColor: state.isFocused ? 'bg-blue-200' : 'bg-white',
    //         borderColor: state.isFocused ? 'border-blue-400' : 'border-gray-300',
    //         boxShadow: state.isFocused ? 'shadow-md' : '',
    //         '&:hover': {
    //             borderColor: state.isFocused ? 'border-blue-400' : 'border-gray-400'
    //         },
    //         // Aplica tus clases de TailwindCSS
    //         '@apply bg-white border border-gray-300 rounded-md p-2': {},
    //     }),
    //     option: (provided:any, state:any) => ({
    //         ...provided,
    //         backgroundColor: state.isSelected ? 'bg-blue-200' : 'bg-white',
    //         color: state.isSelected ? 'text-gray-900' : 'text-gray-700',
    //         '&:hover': {
    //             backgroundColor: state.isSelected ? 'bg-blue-300' : 'bg-gray-100'
    //         },
    //         '@apply p-2': {},
    //     }),
    //     // Personaliza otros componentes según sea necesario
    //     menu: (provided:any) => ({
    //         ...provided,
    //         '@apply bg-white border border-gray-300 rounded-md': {},
    //     }),
    //     singleValue: (provided:any) => ({
    //         ...provided,
    //         '@apply text-gray-900': {},
    //     }),
    // };
    // Componente Option personalizado para renderizar opciones con imágenes de banderas
    const Option = (props: any) => {
        return (
            <components.Option {...props}>
                {props.label}
            </components.Option>
        );
    };

    return (
        <Select
            options={options}
            styles={customStyles}
            components={{ Option }}
            placeholder=""

            // classNames={{
            //     control: ()
            // }}
            // theme={(theme) => ({
            //     ...theme,
            //     borderRadius: 5,
            //     colors: {
            //         ...theme.colors,
            //         primary25: 'hotpink',
            //         primary: 'orange',
            //     },
            //     padding: {
            //         top: 10,
            //         bottom: 2
            //     }
            // })}
            name="country-codes"
            id="country-codes"
            aria-label={selectLabel} // Usamos aria-label para etiquetar el selector
        // Puedes agregar más propiedades según las necesidades de tu aplicación
        />
    );
};

export default CountryPhoneSelect;
