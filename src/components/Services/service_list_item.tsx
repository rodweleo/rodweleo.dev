import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ServiceListItem = ({service, key}) => {
  return (
    <Card className="max-w-[400px]">
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
