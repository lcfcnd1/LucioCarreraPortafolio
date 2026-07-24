import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const user = {
    name: "Lucio Carrera",
    username: "@luciodev",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    bio: "Desarrollador Full Stack | Amante de React y el código limpio.",
    followers: 1258,
    following: 345,
    posts: [
        { id: 10, content: "Día de refactorización. ¡Nada como un código más limpio y eficiente!", image: null },
        { id: 11, content: "Nuevo setup, nuevas posibilidades.", image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400&q=70&fm=webp" },
    ]
}

const ProfilePage = () => {
    return (
        <div className="space-y-6">
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
                        <Avatar className="w-32 h-32">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold">{user.name}</h2>
                            <p className="text-muted-foreground">{user.username}</p>
                            <p className="mt-2">{user.bio}</p>
                            <div className="flex gap-4 mt-4 justify-center md:justify-start">
                                <span><span className="font-bold">{user.followers}</span> Seguidores</span>
                                <span><span className="font-bold">{user.following}</span> Siguiendo</span>
                            </div>
                            <Button className="mt-4">Seguir</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Tabs defaultValue="posts">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="posts">Posts</TabsTrigger>
                    <TabsTrigger value="replies">Respuestas</TabsTrigger>
                    <TabsTrigger value="likes">Me gusta</TabsTrigger>
                </TabsList>
                <TabsContent value="posts">
                    <div className="space-y-4 mt-4">
                    {user.posts.map(post => (
                        <Card key={post.id}>
                            <CardContent className="p-4">
                                {post.content}
                                {post.image && <img src={post.image} alt="Post" className="mt-4 rounded-lg" />}
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ProfilePage;
