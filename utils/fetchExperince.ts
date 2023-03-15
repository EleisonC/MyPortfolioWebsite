import { Experince } from "../typings"

export const fetchExperince = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperince`);

    const data = await res.json()
    const experince: Experince[] = data.experince

    return experince
}
