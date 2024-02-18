import { useEffect, useState, useCallback } from "react";
import { useInput } from "../hooks/useInput";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";

export const EffectSection = (params) => {
  const input = useInput();

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effect</h3>

      <Button style={{ marginBottom: "1rem" }} onClick={() => setModal(true)}>
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Hello its MODAl</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ad saepe
          alias at facere nulla eos! Recusandae fuga porro provident officiis
          blanditiis earum, pariatur delectus autem dolorum ipsa ipsam
          voluptates?
        </p>

        <Button onClick={() => setModal(false)}>Закрыть!</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name
                  .toLowerCase()
                  .includes(input.value.toLocaleLowerCase()),
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
};
