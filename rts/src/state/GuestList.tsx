import {ChangeEvent, FC, useState} from 'react';

const GuestList: FC = () => {
    const [name, setName] = useState<string>('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setGuests([...guests, name])
        setName('');
    }

    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {guests.map(guest => <li key={guest}>{guest}</li>)}
            </ul>

            <input value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            <button onClick={onClick}>Add Guest</button>
        </div>
    );
};

export default GuestList;
