import { backend_stack, cloud_stack, database_stack, devops_stack, frontend_stack } from "@/utils/data/technical-skills"
import { Card, CardContent, CardHeader, CardTitle } from "./card"

export const SkillsList = () => {
    return <section className="flex justify-center gap-10 flex-wrap">
        <Card>
            <CardHeader>
                <CardTitle>
                    Frontend
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-xl">
                    {
                        frontend_stack.map((stack) =>(
                            <li>&#128204;{stack.name}</li>
                        ))
                    }
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>
                    Backend
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-xl">
                    {
                        backend_stack.map((stack) =>(
                            <li>&#128204;{stack.name}</li>
                        ))
                    }
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>
                    Databases
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-xl">
                    {
                        database_stack.map((stack) =>(
                            <li>&#128204;{stack.name}</li>
                        ))
                    }
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>
                    DevOps
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-xl">
                    {
                        devops_stack.map((stack) =>(
                            <li>&#128204;{stack.name}</li>
                        ))
                    }
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>
                    Cloud
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-xl">
                    {
                        cloud_stack.map((stack) =>(
                            <li>&#128204;{stack.name}</li>
                        ))
                    }
                </ul>
            </CardContent>
        </Card>
    </section>
}