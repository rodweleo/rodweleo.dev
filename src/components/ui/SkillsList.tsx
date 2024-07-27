import { backend_stack, cloud_stack, database_stack, frontend_stack } from "@/utils/data/technical-skills";
import { Skills } from "../Skills";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export const SkillsList = () => {
  return (
    <section
      id="skills"
      className="flex flex-wrap gap-10"
    >
      <Card>
        <CardHeader>
          <CardTitle>Frontend</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {frontend_stack.map((stack) => (
              <li className="flex items-center gap-1 text-slate-700">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
                </svg> 
                {stack.name}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Backend</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {backend_stack.map((stack) => (
              <li className="flex items-center gap-1 text-slate-700">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
                </svg> 
                {stack.name}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Databases</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {database_stack.map((stack) => (
              <li className="flex items-center gap-1 text-slate-700">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
                </svg> 
                {stack.name}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cloud</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {cloud_stack.map((stack) => (
              <li className="flex items-center gap-1 text-slate-700">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
                </svg> 
                {stack.name}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
