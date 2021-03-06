import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CustomerCountAggregate } from './customer-count-aggregate.output';
import { CustomerAvgAggregate } from './customer-avg-aggregate.output';
import { CustomerSumAggregate } from './customer-sum-aggregate.output';
import { CustomerMinAggregate } from './customer-min-aggregate.output';
import { CustomerMaxAggregate } from './customer-max-aggregate.output';

@ObjectType()
export class AggregateCustomer {

    @Field(() => CustomerCountAggregate, {nullable:true})
    _count?: CustomerCountAggregate;

    @Field(() => CustomerAvgAggregate, {nullable:true})
    _avg?: CustomerAvgAggregate;

    @Field(() => CustomerSumAggregate, {nullable:true})
    _sum?: CustomerSumAggregate;

    @Field(() => CustomerMinAggregate, {nullable:true})
    _min?: CustomerMinAggregate;

    @Field(() => CustomerMaxAggregate, {nullable:true})
    _max?: CustomerMaxAggregate;
}
