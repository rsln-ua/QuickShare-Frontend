// export const linkModeOptions = <const>['easy', 'medium', 'difficult'];
// export type TLinkMode = keyof typeof linkModeOptions;
//
// export const ttlOptions = <const>[1, 8, 24];
// export type TTtlOption = keyof typeof ttlOptions;

export enum TTtlOption {
	Short = 1,
	Medium = 8,
	Long = 24,
}

export enum TLinkMode {
	easy = 'easy',
	medium = 'medium',
	difficult = 'difficult',
}
