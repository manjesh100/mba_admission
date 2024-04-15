import OnboardingStep1 from "@/components/register/sellerOnboarding/onboardingStep1";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";

const Steps1Page = () => {
    return (
        <>
            <Breadcrumb />
            <div className="container_width px-5">
                <OnboardingStep1 />
            </div>
        </>
    )
}

export default Steps1Page;