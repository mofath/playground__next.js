import Axios from 'axios';
import Image from 'next/image'

export const Profile =({ profile }) =>{
    return (
        <div className="page-container">
            <div>
                <Image 
                    src={profile.image} 
                    alt='profile-img'   
                    width={500}
                    height={500} 
                />
                <h2>{profile.name}</h2>
                <h4>{profile.position}</h4>
                <h4>{profile.description}</h4>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const { data } = await Axios.get('https://my-json-server.typicode.com/mofath/playground__next.js/profile');


    return {
        props: {
            profile : data,
        }
    }
}


export default Profile;