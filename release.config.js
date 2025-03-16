// @ts-check
const BRANCH_NAME = process.env.GITHUB_REF_NAME;
const DEFAULT_BRANCH = process.env.GITHUB_DEFAULT_BRANCH;

if (!BRANCH_NAME) {
	throw new Error('Missing GITHUB_REF_NAME');
}

if (!DEFAULT_BRANCH) {
	throw new Error('Missing GITHUB_DEFAULT_BRANCH');
}

/**
 * @type {import('semantic-release').BranchSpec}
 */
const prereleaseBranch = { name: BRANCH_NAME, prerelease: `${BRANCH_NAME.split('/').pop()}-rc` };

/**
 * @type {Array<import('semantic-release').BranchSpec>}
 */
const branches = BRANCH_NAME === DEFAULT_BRANCH ? [DEFAULT_BRANCH] : [DEFAULT_BRANCH, prereleaseBranch];

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
