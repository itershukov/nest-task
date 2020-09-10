import * as fs from 'fs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger/dist/interfaces';


function saveAPIDocumentationToJson(document: OpenAPIObject) {
  fs.writeFileSync('swagger.json', JSON.stringify(document, undefined, 2));
}

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('S2Q API')
    .setDescription('S2Q API Documentation')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/doc', app, document);
  saveAPIDocumentationToJson(document);
}
