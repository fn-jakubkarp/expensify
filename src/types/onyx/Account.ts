import type {ValueOf} from 'type-fest';
import type CONST from '@src/CONST';
import type DismissedReferralBanners from './DismissedReferralBanners';
import type * as OnyxCommon from './OnyxCommon';
import type {TravelSettings} from './TravelSettings';

/** Two factor authentication steps */
type TwoFactorAuthStep = ValueOf<typeof CONST.TWO_FACTOR_AUTH_STEPS> | '';

/** Model of user account */
type Account = {
    /** Whether SAML is enabled for the current account */
    isSAMLEnabled?: boolean;

    /** Whether SAML is required for the current account */
    isSAMLRequired?: boolean;

    /** Is this account having trouble receiving emails? */
    hasEmailDeliveryFailure?: boolean;

    /** URL to the assigned guide's appointment booking calendar */
    guideCalendarLink?: string;

    /** User recovery codes for setting up 2-FA */
    recoveryCodes?: string;

    /** Secret key to enable 2FA within the authenticator app */
    twoFactorAuthSecretKey?: string;

    /** Whether this account has 2FA enabled or not */
    requiresTwoFactorAuth?: boolean;

    /** Whether the account is validated */
    validated?: boolean;

    /** The primaryLogin associated with the account */
    primaryLogin?: string;

    /** The message to be displayed when code requested */
    message?: string;

    /** Form that is being loaded */
    loadingForm?: ValueOf<typeof CONST.FORMS>;

    /** Whether the user forgot their password */
    forgotPassword?: boolean;

    /** Whether the account exists */
    accountExists?: boolean;

    /** Is the account / domain under domain control? */
    domainControlled?: boolean;

    /** Whether the validation code has expired */
    validateCodeExpired?: boolean;

    /** Whether a sign is loading */
    isLoading?: boolean;

    /** Authentication failure errors */
    errors?: OnyxCommon.Errors | null;

    /** Authentication success message */
    success?: string;

    /** Whether the two factor authentication codes were copied */
    codesAreCopied?: boolean;

    /** Current two factor authentication step */
    twoFactorAuthStep?: TwoFactorAuthStep;

    /** Referral banners that the user dismissed */
    dismissedReferralBanners?: DismissedReferralBanners;

    /** Object containing all account information necessary to connect with Spontana */
    travelSettings?: TravelSettings;

    /** Indicates whether the user is an approved accountant */
    isApprovedAccountant?: boolean;

    /** Indicates whether the user is a client of an approved accountant */
    isApprovedAccountantClient?: boolean;

    /** Indicates whether the user can downgrade current subscription plan */
    canDowngrade?: boolean;

    /** Indicates whether the user has at least one previous purchase */
    hasPurchases?: boolean;
};

export default Account;
export type {TwoFactorAuthStep};
