export const ContactList = ({ contacts }) => {
  //   e
  return (
    <>
      <ul className="">
        {contacts.map(contact => (
          <li className="" key="" id="">
            <span>{contact.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
