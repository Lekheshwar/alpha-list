export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(alpha => {
        return{
            params: { id: alpha.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return {
        props: { alpha : data}
    }
}
 
const Details = ({ alpha }) => {
    return (
        <div>
            <h1>{ alpha.name }</h1>
            <h2>{ alpha.email }</h2>
            <h2>{ alpha.website }</h2>
            <h2>{ alpha.address.city }</h2>
        </div>
     )
}

export default Details;