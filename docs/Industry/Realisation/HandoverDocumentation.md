# Handover Documentation

## Context

I have revised the project documentation to ensure ease of project initiation for other team members and future successors.

## Outcome: The markdown documentation

<div style={{ backgroundColor: '#F9F9F9', padding: '20px' }}>

## BaaS (Backend-as-a-Service) - Supabase

_This guide will assume you are adjusting your data modeling and API on the default deployment on the official platform. In case you want to set up a local development server or self-hosting, check their documentation._

#### Account & Configuration

- Google account

  - Email: <...>
  - Password: <...>

- Supabase account
  - Email: <...>
  - Password: <...>

#### Database connection

_By default, once you have created a project, the superbase will automatically set up a PostgreSQL database for your project. You can connect the database with any tool you like. In the current context, you don't need it, in case you prefer to do it your way._

```
Host: <...>
Database name: postgres
Port: 5432
User: postgres
Password: <...>
```

[<u>Link</u>](https://app.supabase.com/project/uawccbcacinyimooptdn/settings/database)

#### API connection

_A RESTful endpoint for querying and managing your database._

```
URL: <...>
Annon public key: <...>
```

**Supabase alredy provide the auto generate API documendation and comperhensive examples your can alaway search it in their documentation via** [<u>Documentation</u>](https://supabase.com/docs)

Below show some SDK examples:

- Get single Object

```
  const { data, error } = await supabase
      .from('challenges')
      .select()
      .eq('id', id)
      .single()
```

- Get list of Object

```
  cons { data, error } = await supabase
      .from('challenges')
      .select('*')
```

- Insert and return Object

```
  const { data, error } = await supabase
      .from('smoothies')
      .insert([{ title, method, rating }])
      .select();
```

#### Authentication

_The Google auth has settup Click this [<u>Link</u>](https://app.supabase.com/project/uawccbcacinyimooptdn/auth/providers) to add any third party providers_

![image-20230315115751802](https://uawccbcacinyimooptdn.supabase.co/storage/v1/object/public/images/supabase-example-img-1.png)

_You can login the google account provided above to see google OAuth APP credential profile._ [Link](https://console.cloud.google.com/apis/credentials?project=climbtrain)

![image-20230315115634047](https://uawccbcacinyimooptdn.supabase.co/storage/v1/object/public/images/supabase-example-img-2.png)

#### Data modeling

_You can either directly use SQL or their interface to munipulate your data via:_

- [<u>SQL Editor</u>](https://app.supabase.com/project/uawccbcacinyimooptdn/sql)
- [<u>Table editor</u>](https://app.supabase.com/project/uawccbcacinyimooptdn/editor/28505)

- [<u>Sample modelling</u>](https://lucid.app/lucidchart/41a3744d-ae65-4a2f-a36e-4d455a457c0a/edit?viewport_loc=-229%2C-192%2C2151%2C1524%2C0_0&invitationId=inv_46eacada-0adb-47c4-8d4f-4a13d288c556)

</div>
