import * as React from "react";
import { useFormContext } from "react-hook-form";

export default function Test({name}) {
    const methods = useFormContext();
    return <input {...methods.register(name)} />;
}
