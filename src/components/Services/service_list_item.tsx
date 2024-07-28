import { ServiceProps } from "@/utils/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ServiceListItem = ({service, index}: {
  service: ServiceProps
  index: number
}) => {
  return (
    <Card className="max-w-[400px]" key={index}>
      <CardHeader>
        <CardTitle>
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {service.description}
      </CardContent>
    </Card>
  );
};

export default ServiceListItem;
