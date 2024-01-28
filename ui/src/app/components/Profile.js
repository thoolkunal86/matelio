import { Card } from 'primereact/card';

const Profile = () => {
    return (
        <div>
            <div class="grid">
                <div class="col-11">
                    <h2>Profile</h2>
                </div>
                <div class="col">
                    <div class="text-center p-2 border-round-sm bg-primary font-bold ">
                    <a>Logout</a>
                    </div>
                </div>
            </div>
            
            <div class="grid">
                <div class="col">
                <Card title="Email">
                    <p className="m-0">
                        kunal@gmail.com
                    </p>
                </Card>
                </div>
                <div class="col">
                <Card title="Email">
                    <p className="m-0">
                        kunal@gmail.com
                    </p>
                </Card>
                </div>
                <div class="col">
                <Card title="Email">
                    <p className="m-0">
                        kunal@gmail.com
                    </p>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Profile;