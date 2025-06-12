import {signIn} from "@/actions";

export default function SignInButton() {
    return (
        <form action={async () => {
            'use server';
            await signIn();
        }}>
            <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
                GitHub ile Giriş
            </button>
        </form>
    );
}