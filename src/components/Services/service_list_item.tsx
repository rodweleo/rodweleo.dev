import { ServiceProps } from "@/utils/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const ServiceListItem = ({service, index}: {
  service: ServiceProps
  index: number
}) => {
  return <Card className="max-w-[400px]" key={index}>
  <CardHeader>
    <CardTitle className="flex flex-col gap-5">
      <i className={`${service.icon} text-blue-700 size-4`}></i>
      {service.title}
    </CardTitle>
  </CardHeader>
  <CardContent>
    {service.description}
  </CardContent>
  <CardFooter>
    <Button><a href="/request-a-quote">Book Service</a></Button>
  </CardFooter>
</Card>
};

export default ServiceListItem;
