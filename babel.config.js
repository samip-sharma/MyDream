module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						_assets: ["./src/assets"],
						_components: "./src/components",
						_context: "./src/context",
						_styles: "./src/styles",
						_screens: "./src/screens",
						_utils: "./src/utils",
						_adapters: "./src/adapters",
						Navigation: "./src/Navigation",
						types: "./src/types",
						_hooks: "./src/hooks",
					},
				},
			],
			[
				"react-native-reanimated/plugin",
				{
					relativeSourceLocation: true,
				},
			],
		],
	};
};
