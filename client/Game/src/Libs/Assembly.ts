import UnOrderMultiMap from "./Helpers/UnOrderMultiMap";
import { ClassType } from "./ECS/Interfaces";
import { AssemblyNamespace } from "./AssemblyNamespace";


export default class Assembly
{
    private static _namespace = new UnOrderMultiMap<string, ClassType>();

    public static register(classType: ClassType, name: string)
    {
        classType.tag = name;
        this._namespace.addItem(classType.__namespace, classType);
    }

    public static get(namespaceName: AssemblyNamespace): ClassType[]
    {
        return this._namespace.get(namespaceName);
    }
}

window['Assembly'] = Assembly;
