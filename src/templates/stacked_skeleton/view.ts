import { Base } from "./base";
import { Utils } from "../../utils";

export class View extends Base {
  private _dartString: string;

  constructor(fileName: string, suffix: string, useReactive: boolean) {
    super(fileName, suffix);

    let classPrefixList: string[] = this.className.split("View");
    const className = classPrefixList[0];

    const pascalCaseStackedViewName = Utils.convertToPascalCase(className);
    console.log("pascal", pascalCaseStackedViewName);

    const snakeCaseStackedViewName = Utils.convertToSnakeCase(className);
    console.log("snake", snakeCaseStackedViewName);

    const stackedView = `${pascalCaseStackedViewName}View`;
    const stackedViewModel = `${pascalCaseStackedViewName}ViewModel`;

    this._dartString = `
import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';

import './${fileName}_view_model.dart';

class ${className} extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<${stackedViewModel}>.${
      useReactive ? "reactive" : "nonReactive"
    }(
      viewModelBuilder: () => ${stackedViewModel}(),
      builder: (
        BuildContext context,
        ${stackedViewModel} model,
        Widget child,
      ) {
        return Scaffold(
          body: Center(
            child: Text(
              '${stackedView}',
            ),
          ),
        );
      },
    );
  }
}
`;
  }

  get dartString(): string {
    return this._dartString;
  }
}
