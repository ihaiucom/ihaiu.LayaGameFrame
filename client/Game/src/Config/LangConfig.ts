import BaseConfig from "./BaseConfig";
import Dictionary from "../Libs/Helpers/Dictionary";

export default class LangConfig extends BaseConfig
{
    public dict: Dictionary<string, string | string[]> = new Dictionary<string, string | string[]>();



}