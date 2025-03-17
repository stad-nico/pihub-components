// @ts-check
const BRANCH_NAME = process.env.GITHUB_REF_NAME;
const DEFAULT_BRANCH = process.env.GITHUB_DEFAULT_BRANCH;
const RC_NAME_OVERRIDE = process.env.RC_NAME_OVERRIDE;

if (!BRANCH_NAME) {
	throw new Error('Missing GITHUB_REF_NAME');
}

if (!DEFAULT_BRANCH) {
	throw new Error('Missing GITHUB_DEFAULT_BRANCH');
}

const PRE_RELEASE = BRANCH_NAME !== DEFAULT_BRANCH;

const using = RC_NAME_OVERRIDE ? `RC_NAME_OVERRIDE ${RC_NAME_OVERRIDE}` : `branch name ${BRANCH_NAME.split('/').pop()}`;

PRE_RELEASE && console.log(`Using ${using} for the release candidate`);

const RC_NAME = `${RC_NAME_OVERRIDE || BRANCH_NAME.split('/').pop()}-rc`;

PRE_RELEASE && console.log(`Release candidate name -> ${RC_NAME}`);

/**
 * @type {import('semantic-release').BranchSpec}
 */
const prerelease = { name: BRANCH_NAME, channel: RC_NAME, prerelease: RC_NAME };

/**
 * @type {Array<import('semantic-release').BranchSpec>}
 */
const branches = BRANCH_NAME === DEFAULT_BRANCH ? [DEFAULT_BRANCH] : [DEFAULT_BRANCH, prerelease];

/**
 * @type {Array<import('semantic-release').PluginSpec>}
 */

const plugins = [
	'@semantic-release/commit-analyzer',
	'@semantic-release/release-notes-generator',
	[
		'@semantic-release/npm',
		{
			pkgRoot: 'dist/pihub/components',
		},
	],
	[
		'@semantic-release/git',
		{
			assets: ['package.json', 'projects/pihub/components/package.json', 'CHANGELOG.md'],
			message: 'chore(release): ${nextRelease.version} [skip ci]',
		},
	],
	'@semantic-release/github',
];

module.exports = { branches, plugins };
