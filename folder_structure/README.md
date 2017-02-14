Structure the app such that you can LIFT - **L**ocate code quickly, **I**dentify the code at a glance, keep the **F**lattest structure you can, and **T**ry to be DRY.


	project root
		dist - builds are placed here by default
		e2e - end to end testing scripts are placed here
		node_modules - node module storage
		src - all app source should be placed here
			app - 
				app.component.ts|.css|.html|.spec.ts
				core
					core.module.ts
					logger.service.ts|spec.ts
					nav
						nav.component.ts|html|css|spec.ts
				feature
					feature.component.ts|html|css|spec.ts
					feature.module.ts
					feature.service.ts|spec.ts
					featureRelated
						featureRelated.component.ts|html|css|spec.ts
				shared
					shared.module.ts
					
			assets - images and other files
			environment - environment config files
			


**Folders-by-feature structure**

- Create an Angular module for all distinct features in an application 
- Be descriptive with file names and keep the contents of the file to exactly one component.
- Place the feature module in the same named folder as the feature area (.e.g app/heroes).
- Name the feature module file reflecting the name of the feature area and folder (e.g. app/heroes/heroes.module.ts)

- Avoid files with multiple components, multiple services, or a mixture.

**Shared feature Module**

- A feature module named SharedModule exists in a shared folder (e.g. app/shared/shared.module.ts defines SharedModule).
- Declare components, directives, and pipes in the shared module when those items will be re-used and referenced by the components declared in other feature modules.
- Export all symbols from the SharedModule that other feature modules need to use


- Do not provide services in shared modules. Services are usually singletons that are provided once for the entire application or in a particular feature module.

**Core feature module**

- Collect numerous, auxiliary, single-use classes inside a core module to simplify the apparent structure of a feature module.
- CoreModule is imported into the root AppModule to reduce its complexity and emphasize its role as orchestrator of the application as a whole.
- Put a singleton service whose instance will be shared throughout the application in the CoreModule (e.g. ExceptionService and LoggerService).
- Gather application-wide, single use components in the CoreModule. Import it once (in the AppModule) when the app starts and never import it anywhere else. (e.g. NavComponent and SpinnerComponent).

- Don't import the CoreModule anywhere except in the AppModule.
