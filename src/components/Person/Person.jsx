export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person_name">My name is {person.name}</h2>
    {person.age && <p className="Person_age">I am {person.age}</p>}
    {person.isMarried ? (
      <p className="Person_partner">
        {person.partnerName} is my {person.sex === 'm' ? 'wife' : 'husband'}
      </p>
    ) : (
      <p className="Person_partner">I am not married</p>
    )}
  </section>
);
