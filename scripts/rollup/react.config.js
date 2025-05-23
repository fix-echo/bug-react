import generatePackageJson from "rollup-plugin-generate-package-json";
// react包的打包配置
import { getBaseRollupPlugins, getPackageJson, resolvePkgPath } from "./utils";

const { name, module } = getPackageJson("react");
// react包的路径
const pkgPath = resolvePkgPath(name);

// react产物路径
const pkgDistPath = resolvePkgPath(name, true);

export default [
	// react
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${pkgDistPath}/index.js`,
			name: "index.js",
			format: "umd",
		},
		plugins: [
			...getBaseRollupPlugins(),
			generatePackageJson({
				inputFolder: pkgPath,
				outputFolder: pkgDistPath,
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: "index.js",
				}),
			}),
		],
	},
	// jsx-runtime
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: [
			// jsx-runtime
			{
				file: `${pkgDistPath}/jsx-runtime.js`,
				name: "jsx-runtime.js",
				format: "umd",
			},
			// jsxDEV-runtime
			{
				file: `${pkgDistPath}/jsx-dev-runtime.js`,
				name: "jsx-dev-runtime.js",
				format: "umd",
			},
		],
		plugins: getBaseRollupPlugins(),
	},
];
